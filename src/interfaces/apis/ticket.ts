type TicketStatusType = "OPEN" | "ON_HOLD" | "UNRESOLVED" | "RESOLVED";
type TicketPriorityType = "NORMAL" | "LOW" | "HIGH";

export interface ITicket {
	id: string | any;
	description: string | any;
	status: TicketStatusType | any;
	priority: TicketPriorityType | any;
	creator: string | any;
	due_date: string | any;
	created_at: string | any;
	updated_at: string | any;
}
