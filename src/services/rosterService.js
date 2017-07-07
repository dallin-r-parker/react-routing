const roster = [
	{
		id: 1,
		name: 'Blake Griffin',
		image: 'http://sportschew.com/wp-content/uploads/sc480-1.jpg'
	},
	{
		id: 2,
		name: 'DeAndre Jordan',
		image: 'http://images.performgroup.com/di/library/sporting_news/3/87/deandre-jordan-ftr-010815-youtubejpg_f3lcu6tnks6u1d0pxy2wusuz3.jpg?t=-885189662'
	},
	{
		id: 3,
		name: 'Patrick Beverly',
		image: 'https://cdn.vox-cdn.com/thumbor/XnTpKZg6Kb3RStN2gTy0kDIkeLc=/6x0:2457x1634/1820x1213/filters:focal(6x0:2457x1634):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/49496063/usa-today-9253901.0.jpg'
	}
]

export function getRoster(){
	return roster
}

export function getPlayer(id){
	return roster.find(p => p.id == id)
}