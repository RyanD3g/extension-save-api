export class ErrorNicknameOrPassword extends Error {
    constructor(){
        super('Nickname ou Password inválidos');
    };
};
