/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('menu', {
		menuId: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		isDisplay: {
			type: DataTypes.INTEGER(1),
			allowNull: true
		},
		sort: {
			type: DataTypes.INTEGER(3),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING,
			allowNull: true
		},
		parentId: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		describe: {
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
		},
		icon: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'menu'
	});
};
