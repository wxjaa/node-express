/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('derlative', {
		DERelativeId: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		employeeId: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		departmentId: {
			type: DataTypes.CHAR(36),
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
		tableName: 'derlative'
	});
};
