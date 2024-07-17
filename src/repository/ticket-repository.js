const { NotificationTicket } = require('../models/index');

class TicketRepository {

    async getAll(){
        try {
            const tickets = NotifictaionTicket.findAll();
            return tickets;
        } catch (error) {
            throw error;
            
        }
    }

    async create(data) {
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }
    async get(filter) {
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TicketRepository;