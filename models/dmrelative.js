/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dmrelative', {
		DMRelativeId: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		departmentId: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		menuId: {
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
		tableName: 'dmrelative'
	});
};
