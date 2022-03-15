export interface IComment {
  commentId: string
  text: string
  author: string
}

export interface ICard {
  id: string
  title: string
  text: string
  author: string
  comments: IComment[]
}

export interface ICloumn {
  listTitle: string
  cards: ICard[]
}