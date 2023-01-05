'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'stations',
      [
        {
          name: 'Bến Xe Đà Nẵng',
          address: '50 Phan Khoang',
          province: 'DN',
          createdAt: '2023-01-05 06:53:46',
          updatedAt: '2023-01-05 06:53:46',
        },
        {
          name: 'Bến Xe Phước Long',
          address: 'QL1A, Hoà Phước, Hòa Vang',
          province: 'DN',
          createdAt: '2023-01-05 06:53:46',
          updatedAt: '2023-01-05 06:53:46',
        },
        {
          name: 'Bến Xe Tam Kỳ',
          address: 'QL1A, Phường Tân Thạnh, Tam Kỳ, Quảng Nam',
          province: 'QNAM',
          createdAt: '2023-01-05 06:53:46',
          updatedAt: '2023-01-05 06:53:46',
        },
        {
          name: 'Bến Xe Quy Nhơn',
          address: '71 Đường Tây Sơn, Quy Nhơn',
          province: 'QNHON',
          createdAt: '2023-01-05 06:53:46',
          updatedAt: '2023-01-05 06:53:46',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
