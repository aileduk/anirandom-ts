export interface ISearchAnime {
	id: string
	attributes: IAnime
}
export interface IAnime {
	canonicalTitle: string
	episodeCount: number
	episodeLength: number
	showType: string
	startDate: string
	endDate: string
	description: string
	posterImage: TPoster
}
type TPoster = {
	tiny: string
	small: string
}
