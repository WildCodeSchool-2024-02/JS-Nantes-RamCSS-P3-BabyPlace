/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class ChildRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "child" as configuration
    super({ table: "child" });
  }

  // The C of CRUD - Create operation
  async create(
    firstname,
    lastname,
    birthday,
    is_walker,
    is_disabled,
    allergies,
    insurance_certificate,
    health_book,
    birth_certificate,
    name_doctor,
    care_authorization,
    parent_id
  ) {
    const [rows] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, birthday, is_walker, is_disabled, allergies, insurance_certificate, health_book, birth_certificate, name_doctor, care_authorization, parent_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        birthday,
        is_walker,
        is_disabled,
        allergies,
        insurance_certificate,
        health_book,
        birth_certificate,
        name_doctor,
        care_authorization,
        parent_id,
      ]
    );
    // Return the ID of the newly inserted child
    return rows.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific child by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the child
    return rows[0];
  }

  // !lire tout les enfants en fonction du parent
  async readAll(parentId) {
    // Execute the SQL SELECT query to retrieve all children by parent ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE parent_id = ?`,
      [parentId]
    );

    // Return all rows of the result, which represent the children
    return rows;
  }

  // The U of CRUD - Update operation
  async update(body) {
    const {
      firstname,
      lastname,
      birthday,
      is_walker,
      is_disabled,
      allergies,
      insurance_certificate,
      health_book,
      birth_certificate,
      name_doctor,
      care_authorization,
      parent_id,
      id,
    } = body;
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, birthday = ?, is_walker = ?, is_disabled = ?,allergies = ?, insurance_certificate = ?, health_book = ?, birth_certificate = ?, name_doctor = ?, care_authorization = ?, parent_id = ? WHERE id = ?`,
      [
        firstname,
        lastname,
        birthday,
        is_walker,
        is_disabled,
        allergies,
        insurance_certificate,
        health_book,
        birth_certificate,
        name_doctor,
        care_authorization,
        parent_id,
        id,
      ]
    );

    // Return a boolean indicating whether the deletion was successful
    return row;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove an item by its ID
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    // Return a boolean indicating whether the deletion was successful
    return row;
  }
}

module.exports = ChildRepository;
