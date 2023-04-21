-- projects definition

DROP TABLE IF EXISTS projects

CREATE TABLE projects (
	id TEXT(5) NOT NULL, 
    "image" TEXT(65),
	projectCreated TEXT(10) NOT NULL,
	projectUpdated TEXT(10) NOT NULL,
	createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
    isActive TEXT(1) DEFAULT (0) NOT NULL
);

DROP TABLE IF EXISTS projects_translations

CREATE TABLE projects_translations (
    id TEXT(5) NOT NULL,
	projectId TEXT(5) NOT NULL,
    "language" TEXT(5) NOT NULL,
	"name" TEXT(10) NOT NULL,
	"slug" TEXT(10) NOT NULL,
    "description" TEXT(65),
    "tags" TEXT,
    createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
	FOREIGN KEY (projectId) REFERENCES projects(id)
);

DROP TABLE IF EXISTS projects_images

CREATE TABLE projects_images (
    id TEXT(5) NOT NULL,
	projectId TEXT(5) NOT NULL,
    "name" TEXT(10) NOT NULL,
    attachment TEXT NOT NULL,
    createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
	FOREIGN KEY (projectId) REFERENCES projects(id)
);

DROP TABLE IF EXISTS projects_platforms

CREATE TABLE projects_platforms (
    id TEXT(5) NOT NULL,
	projectId TEXT(5) NOT NULL,
    "name" TEXT(10) NOT NULL,
    "logo" TEXT(65),
    "urlPreview" TEXT,
    "urlRepository" TEXT,
    createdAt TEXT(10) NOT NULL,
	updatedAt TEXT(10) NOT NULL,
	FOREIGN KEY (projectId) REFERENCES projects(id)
);