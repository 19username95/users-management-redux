class IncrementService {
    static getNextId() {
        IncrementService.currentId += 1;
        return IncrementService.currentId;
    }
}

IncrementService.currentId = 1;

export default IncrementService;
