/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class ParentRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "parent" as configuration
    super({ table: "parent" });
  }

  // The C of CRUD - Create operation
  async create(firstname, lastname, occupation, phone, email, address, identity_card, photo, social_security_number, caf_number, proof_of_income, taxe_filling, proof_of_adress, proof_of_professional_status, rib, photo_and_video_authorization, exit_permit, copy_of_family_record_book, copy_of_divorce_judgment, conditions_of_use) {
    const [rows] = await this.database.query(`INSERT INTO ${this.table} (
      firstname, lastname, occupation, phone, email, address, identity_card, photo, social_security_number, caf_number, proof_of_income, taxe_filling, proof_of_adress, proof_of_professional_status, rib, photo_and_video_authorization, exit_permit, copy_of_family_record_book, copy_of_divorce_judgment, conditions_of_use) values (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?)`,
      [firstname, lastname, occupation, phone, email, address, identity_card, photo, social_security_number, caf_number, proof_of_income, taxe_filling, proof_of_adress, proof_of_professional_status, rib, photo_and_video_authorization, exit_permit, copy_of_family_record_book, copy_of_divorce_judgment, conditions_of_use]
    );
    // Return the ID of the newly inserted parent
    return rows.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific parent by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the parent
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all children from the "parent" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readAllFavoritesByParentId(id) {
    // Execute the SQL SELECT query to retrieve all children from the "parent" table
    const [rows] = await this.database.query(`select nursery.* FROM ${this.table} INNER JOIN favorite ON parent.id = favorite.parent_id JOIN nursery  ON favorite.nursery_id = nursery.id WHERE parent.id = ?`,
      [id]
    );
    // Return the array of items
    return rows;
  }



  // The U of CRUD - Update operation
  async update(body) {
    
    // Execute the SQL UPDATE query to modify an existing parent in the "parent" table
    const {firstname, lastname, occupation, phone, email, address, identity_card, photo, social_security_number, caf_number, proof_of_income, taxe_filling, proof_of_adress, proof_of_professional_status, rib, photo_and_video_authorization, exit_permit, copy_of_family_record_book, copy_of_divorce_judgment, conditions_of_use, id} = body;
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, occupation = ?, phone = ?, email = ?, address = ?, identity_card = ?, photo = ?, social_security_number = ?, caf_number = ?, proof_of_income = ?, taxe_filling = ?, proof_of_adress = ?, proof_of_professional_status = ?, rib = ?, photo_and_video_authorization = ?, exit_permit = ?, copy_of_family_record_book = ?, copy_of_divorce_judgment = ?, conditions_of_use = ? WHERE id = ?`,
      [firstname, lastname, occupation, phone, email, address, identity_card, photo, social_security_number, caf_number, proof_of_income, taxe_filling, proof_of_adress, proof_of_professional_status, rib, photo_and_video_authorization, exit_permit, copy_of_family_record_book, copy_of_divorce_judgment, conditions_of_use, id]
    );
    // Return the number of affected rows
    return row;
  }
  
  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove a parent by its ID
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the number of affected rows
    return row;
  }
}

module.exports = ParentRepository;
