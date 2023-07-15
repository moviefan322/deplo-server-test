import { MigrationInterface, QueryRunner } from "typeorm";

module.exports = class initialSchema1625847615203 {
  name = "initialSchema1625847615203";

  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "username" varchar NOT NULL)`
    );

    await queryRunner.query(
      `CREATE TABLE "stats" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "lessonId" integer NOT NULL, "score" integer NOT NULL, "outOf" integer NOT NULL, "userId" integer NOT NULL)`
    );

    await queryRunner.query(
      `CREATE TABLE "lesson" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "unit" integer NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL)`
    );

    await queryRunner.query(
      `CREATE TABLE "flashcard" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "spanish" varchar NOT NULL, "english" varchar NOT NULL, "userId" integer NOT NULL)`
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "flashcard"`);

    await queryRunner.query(`DROP TABLE "lesson"`);

    await queryRunner.query(`DROP TABLE "stats"`);

    await queryRunner.query(`DROP TABLE "user"`);
  }
};
