	DROP TABLE IF EXISTS users CASCADE;
	CREATE TABLE users (
		id				UUID			DEFAULT gen_random_uuid(),
		login_id		TEXT			NOT NULL	UNIQUE,
		password		TEXT			NOT NULL,
		nickname		TEXT			NOT NULL,
		create_at		TIMESTAMPTZ		DEFAULT now()	NOT NULL,
		is_withdrawn	BOOLEAN			DEFAULT FALSE	NULL,
		withdrawn_at	TIMESTAMPTZ		NULL,
		CONSTRAINT pk_users PRIMARY KEY (id)
	);

	COMMENT ON COLUMN users.id IS '회원ID';
	COMMENT ON COLUMN users.login_id IS '아이디';
	COMMENT ON COLUMN users.password IS '비밀번호';
	COMMENT ON COLUMN users.nickname IS '닉네임';
	COMMENT ON COLUMN users.create_at IS '가입일시';
	COMMENT ON COLUMN users.is_withdrawn IS '탈퇴여부(TRUE: 탈퇴, FALSE: 유지)';
	COMMENT ON COLUMN users.withdrawn_at IS '탈퇴일시';


	DROP TABLE IF EXISTS groups CASCADE;
	CREATE TABLE groups (
		id				UUID			DEFAULT gen_random_uuid(),
		creator_user_id	UUID			NOT NULL,
		group_name		TEXT			NOT NULL,
		create_at		TIMESTAMPTZ		DEFAULT now()	NOT NULL,
		deleted_at		TIMESTAMPTZ		NULL,
		CONSTRAINT pk_groups PRIMARY KEY (id),
		CONSTRAINT fk_groups_users FOREIGN KEY (creator_user_id) REFERENCES users(id)
	);

	COMMENT ON COLUMN groups.id IS '그룹ID';
	COMMENT ON COLUMN groups.creator_user_id IS '생성자';
	COMMENT ON COLUMN groups.group_name IS '그룹명(기본값:백엔드에서 [유저명]그룹설정/한 유저 내 중복 시 [유저명]그룹(1) 형태 동적 생성)';
	COMMENT ON COLUMN groups.create_at IS '생성일시';
	COMMENT ON COLUMN groups.deleted_at IS '삭제일시';


	DROP TABLE IF EXISTS group_members CASCADE;
	CREATE TABLE group_members (
		id				BIGINT		GENERATED ALWAYS AS IDENTITY,
		member_user_id	UUID		NOT NULL,
		group_id		UUID		NOT NULL,
		role			TEXT		NOT NULL	DEFAULT '01',
		CONSTRAINT pk_group_members PRIMARY KEY (id),
		CONSTRAINT fk_group_members_users FOREIGN KEY (member_user_id) REFERENCES users(id),
		CONSTRAINT fk_group_members_groups FOREIGN KEY (group_id) REFERENCES groups(id),
		CONSTRAINT uq_group_members_user UNIQUE (group_id, member_user_id)
	);

	COMMENT ON COLUMN group_members.id IS '멤버ID';
	COMMENT ON COLUMN group_members.member_user_id IS '그룹참가회원';
	COMMENT ON COLUMN group_members.group_id IS '그룹ID';
	COMMENT ON COLUMN group_members.role IS '멤버역할(일반:01,  총무:02)';


	DROP TABLE IF EXISTS group_expenses CASCADE;
	CREATE TABLE group_expenses (
		id				BIGINT				GENERATED ALWAYS AS IDENTITY,
		mgr_member_id	BIGINT				NOT NULL,
		title			TEXT				NOT NULL,
		total_amount	DECIMAL(20,4)		NOT NULL,
		tx_at			TIMESTAMPTZ			DEFAULT now()	NOT NULL,
		CONSTRAINT pk_group_expenses PRIMARY KEY (id),
		CONSTRAINT fk_group_expenses_group_members FOREIGN KEY (mgr_member_id) REFERENCES group_members(id)
	);

	COMMENT ON COLUMN group_expenses.id IS '경비ID';
	COMMENT ON COLUMN group_expenses.mgr_member_id IS '총무';
	COMMENT ON COLUMN group_expenses.title IS '정산제목';
	COMMENT ON COLUMN group_expenses.total_amount IS '경비';
	COMMENT ON COLUMN group_expenses.tx_at IS '거래일시';


	DROP TABLE IF EXISTS settlements CASCADE;
	CREATE TABLE settlements (
		id					BIGINT			GENERATED ALWAYS AS IDENTITY,
		sender_member_id	BIGINT			NOT NULL,
		expense_id			BIGINT			NOT NULL,
		amount				DECIMAL(20,4)	NOT NULL,
		is_paid				BOOLEAN			DEFAULT FALSE	NOT NULL,
		paid_at				TIMESTAMPTZ		NULL,
		CONSTRAINT pk_settlements PRIMARY KEY (id),
		CONSTRAINT fk_settlements_group_members FOREIGN KEY (sender_member_id) REFERENCES group_members(id),
		CONSTRAINT fk_settlements_group_expenses FOREIGN KEY (expense_id) REFERENCES group_expenses(id)
	);

	COMMENT ON COLUMN settlements.id IS '정산ID';
	COMMENT ON COLUMN settlements.sender_member_id IS '일반멤버ID';
	COMMENT ON COLUMN settlements.expense_id IS '경비ID';
	COMMENT ON COLUMN settlements.amount IS '송금예정금액';
	COMMENT ON COLUMN settlements.is_paid IS '송금여부(미입금:FALSE, 입금:TRUE)';
	COMMENT ON COLUMN settlements.paid_at IS '송금완료일시';


	DROP TABLE IF EXISTS images CASCADE;
	CREATE TABLE images (
		id				BIGINT		GENERATED ALWAYS AS IDENTITY,
		expense_id		BIGINT		NOT NULL,
		file_name		TEXT		NOT NULL,
		physical_name	UUID		NOT NULL,
		CONSTRAINT pk_images PRIMARY KEY (id),
		CONSTRAINT fk_images_group_expenses FOREIGN KEY (expense_id) REFERENCES group_expenses(id)
	);

	COMMENT ON COLUMN images.id IS '이미지ID';
	COMMENT ON COLUMN images.expense_id IS '경비ID';
	COMMENT ON COLUMN images.file_name IS '원본파일명';
	COMMENT ON COLUMN images.physical_name IS '저장파일명';


	DROP TABLE IF EXISTS accounts CASCADE;
	CREATE TABLE accounts (
		id				UUID			DEFAULT gen_random_uuid(),
		user_id			UUID			NOT NULL,
		account_number	TEXT			NOT NULL,
		current_balance	DECIMAL(20,4)	DEFAULT 0		NOT NULL,
		create_at		TIMESTAMPTZ		DEFAULT now()	NOT NULL,
		deleted_at		TIMESTAMPTZ		NULL,
		CONSTRAINT pk_accounts PRIMARY KEY (id),
		CONSTRAINT fk_accounts_users FOREIGN KEY (user_id) REFERENCES users(id)
	);

	COMMENT ON COLUMN accounts.id IS '계좌ID';
	COMMENT ON COLUMN accounts.user_id IS '회원ID';
	COMMENT ON COLUMN accounts.account_number IS '계좌번호(하이픈 포함)';
	COMMENT ON COLUMN accounts.current_balance IS '잔액';
	COMMENT ON COLUMN accounts.create_at IS '등록일시';
	COMMENT ON COLUMN accounts.deleted_at IS '삭제일시';


	DROP TABLE IF EXISTS account_transactions CASCADE;
	CREATE TABLE account_transactions (
		id					BIGINT			GENERATED ALWAYS AS IDENTITY,
		account_id			UUID			NOT NULL,
		balance_after_tx	DECIMAL(20,4)	DEFAULT 0	NOT NULL,
		amount				DECIMAL(20,4)	DEFAULT 0	NOT NULL,
		type				TEXT			NOT NULL,
		tx_at				TIMESTAMPTZ		DEFAULT now()	NOT NULL,
		CONSTRAINT pk_account_transactions PRIMARY KEY (id),
		CONSTRAINT fk_account_transactions_accounts FOREIGN KEY (account_id) REFERENCES accounts(id)
	);

	COMMENT ON COLUMN account_transactions.id IS '거래ID';
	COMMENT ON COLUMN account_transactions.account_id IS '계좌ID';
	COMMENT ON COLUMN account_transactions.balance_after_tx IS '거래 후 잔액';
	COMMENT ON COLUMN account_transactions.amount IS '거래금액';
	COMMENT ON COLUMN account_transactions.type IS '거래유형(01:충전, 02:포인트지급, 03:정산가산, 10:환불, 11:정산차감)';
	COMMENT ON COLUMN account_transactions.tx_at IS '거래일시';

