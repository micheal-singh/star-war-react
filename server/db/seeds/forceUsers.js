exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('forceUsers').del()
    .then(() => {
      // Inserts seed entries
      return knex('forceUsers').insert([
        { id: 1, name: 'Luke', homeWorld: 'Tatooine', jedi: true, sith: false, neutral: false },
        { id: 2, name: 'Anakin', homeWorld: 'Tatooine', jedi: true, sith: true, neutral: false },
        { id: 3, name: 'Leia', homeWorld: 'Tatooine', jedi: false, sith: false, neutral: true }
      ])
    })
}
