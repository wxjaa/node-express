/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employee', {
		employeeId: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		pwd: {
			type: DataTypes.STRING,
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'employee'
	});
};
