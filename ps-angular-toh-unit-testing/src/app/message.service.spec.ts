import { MessageService } from "./message.service";

describe('Message Service', () =>{

    let sut: MessageService;

    beforeEach(() => {
        sut = new MessageService();
    });

    it('should have no messages on start', () => {
        expect(sut.messages.length).toBe(0); 
    })

    it('should add messages', () =>{
        sut.add('Do some work...');
        sut.add('Do some more work...');
        sut.add('That is plenty of work..');

        expect(sut.messages.length).toBe(3);
    })

    it('should clear messages', () => {
        sut.add('Do some work...');
        sut.add('Do some more work...');
        sut.add('That is plenty of work..');

        expect(sut.messages.length).toBe(3);

        sut.clear();

        expect(sut.messages.length).toBe(0);
    })
});