import {TPresenceDto} from "../../types/t-presence-dto";
import {TPresence} from "../../types/t-presence";
import {DateTime} from "luxon";

export const transformTPresenceDtoToTPresence = (presenceDto: TPresenceDto): TPresence => {
  return {
    id: presenceDto.id,
    authorId: presenceDto.authorId,
    comment: presenceDto.comment,
    dateEnd: DateTime.fromSeconds(presenceDto.dateEnd.seconds).toLocaleString(),
    dateStart: DateTime.fromSeconds(presenceDto.dateStart.seconds).toLocaleString(),
    eventId: presenceDto.eventId,
    nbrAdults: parseInt(presenceDto.nbrAdults, 10),
    nbrChildren: parseInt(presenceDto.nbrChildren, 10)
  }
}
