"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvent = void 0;
const Uuid_1 = require("./Uuid");
class DomainEvent {
    constructor(eventName, aggregateId, eventId, occurredOn) {
        this.aggregateId = aggregateId;
        this.eventId = eventId || Uuid_1.Uuid.random().value;
        this.occurredOn = (occurredOn != null) || new Date();
        this.eventName = eventName;
    }
}
exports.DomainEvent = DomainEvent;
