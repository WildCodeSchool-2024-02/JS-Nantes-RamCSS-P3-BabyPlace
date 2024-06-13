/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class NurseryRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "nursery" as configuration
    super({ table: "nursery" });
  }

  // The C of CRUD - Create operation
  // async create(nursery) {
  //   // Execute the SQL INSERT query to add a new nursery to the "nursery" table
  //   const [result] = await this.database.query(
  //     `INSERT INTO ${this.table} (title, user_id) VALUES (?, ?)`,
  //     [nursery.user_id]
  //   );

  //   // Return the ID of the newly inserted nursery
  //   return result.insertId;
  // }

  // Alias for the create method
  async create( siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct ) {
    const [rows] = await this.database.query(`INSERT INTO ${this.table} (
    siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
      presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct ]);
    return rows;
  }

  // The R of CRUD - Read operations
  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "nursery" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  async update(nursery) {
    // Execute the SQL UPDATE query to modify an existing nursery
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, user_id = ? WHERE id = ?`,
      [nursery.title, nursery.user_id, nursery.id]
    );

    // Return a boolean indicating whether the update was successful
    return result.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    // Execute the SQL DELETE query to remove an item by its ID
    const [row] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return a boolean indicating whether the deletion was successful
    return row.affectedRows;
  }
}

module.exports = NurseryRepository;
