// создание замечания к сущности
import { faker } from '@faker-js/faker';

export class  NoteBuilder {
    addNoteTopic() {
        this.noteTopic = faker.string.alpha(10);
        return this;
    }

    addNoteText() {
        this.noteText = faker.lorem.sentence(3);
        return this;        
    }

    generateNote() {
        return {
            title: this.noteTopic,
            text: this.noteText
        }
    }
}

{
    "executorId": "7ccfd3e4-01c2-4b41-920a-60b49af8aeb7", // Исполнитель (перчаткина)
    "entityType": "DELIVERABLE", 
    "entityId": "{{deliverableId}}",
    "topic": "{{$randomJobTitle}}",
    "note": "{{$randomLoremText}}"
}

// entityType тип сущности, для которой создается замечание
// values: DELIVERABLE, DOCUMENT, ENGAGEMENT, OPORA_FSLI, PROCEDURE, STRUCTURE, TEAM, OPORA, DELIVERABLE_MATERIALITY, DELIVERABLE_COMPONENTS_MATERIALITY"