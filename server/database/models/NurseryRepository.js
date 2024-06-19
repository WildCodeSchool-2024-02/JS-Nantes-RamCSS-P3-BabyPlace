/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class NurseryRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "nursery" as configuration
    super({ table: "nursery" });
  }

  // Alias for the create method
  async create( siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct ) {
    const [row] = await this.database.query(`INSERT INTO ${this.table} (
    siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity,opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
      presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct ]);
    return row.insertId;
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
  async update(body) {
    
    const { siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity, opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
    presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct, id } = body;
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET siret = ?, name = ?, address = ?, postal_code = ?, city = ?, phone = ?, email = ?, type_of_nursery = ?, capacity = ?,opening_hours = ?, closing_time = ?, hourly_price = ?, agrement = ?, photo_1 = ?, photo_2 = ?, photo_3 = ?, description_nursery = ?, disabled_children = ?, outdoor_space = ?,
        presence_of_animals = ?, meal = ?, hygiene_product = ?, music_workshop = ?, artistic_activities = ?, bilingual_international = ?, child_transport = ?, code_of_conduct = ? WHERE id = ?`,
      [ siret, name, address, postal_code, city, phone, email, type_of_nursery, capacity, opening_hours, closing_time, hourly_price, agrement, photo_1, photo_2, photo_3, description_nursery, disabled_children, outdoor_space,
        presence_of_animals, meal, hygiene_product, music_workshop, artistic_activities, bilingual_international, child_transport, code_of_conduct, id]
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

module.exports = NurseryRepository;
