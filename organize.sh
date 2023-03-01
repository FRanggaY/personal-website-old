-- education definition

DROP TABLE IF EXISTS education

CREATE TABLE education (
	id TEXT(5) NOT NULL,
	title TEXT(28) NOT NULL,
	degree TEXT(28) NOT NULL,
	fieldOfStudy TEXT(28),
	location TEXT(28),
	grade TEXT(10),
	startDate TEXT(10) NOT NULL,
	endDate TEXT(10) NOT NULL,
	description TEXT(65), 
    logo TEXT NOT NULL,
	url TEXT(65)
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL,
);

