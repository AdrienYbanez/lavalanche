export type TPresenceDto = {
  id: string;
  authorId: string;
  comment: string;
  dateEnd: TDateTimestamp;
  dateStart: TDateTimestamp;
  eventId: number;
  nbrAdults: string;
  nbrChildren: string;
}

type TDateTimestamp = {
  seconds: number;
  nanoseconds: number;
}
