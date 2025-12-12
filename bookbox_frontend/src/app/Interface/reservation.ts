import { User } from './user';
import { ReservationId } from './reservation-id';
import { Box, CreatedBox } from './box';

export interface Reservation {
  reservationId:ReservationId;
  box : Box;
  user: User;
  reservationNb: number;
}

export interface CreatedReservation {
  reservationId:ReservationId;
  reservationNb: number;
}
