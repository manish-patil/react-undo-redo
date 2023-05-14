import { ICommand, IWithID } from './../types';

export default class ChangePropertyCommand<Record extends IWithID>
  implements ICommand<Record>
{
  constructor(
    private records: Record[],
    private note: Partial<Record>,
    private property: keyof Record
  ) {}

  private doAction = () => {
    return this.records.map((record, idx) => {
      if (this.records[idx].id === this.note.id) {
        return {
          ...record,
          [this.property]: this.note[this.property],
        };
      } else {
        return { ...record };
      }
    })!;
  };

  execute = (): Record[] => {
    return this.doAction();
  };

  undo = (): Record[] => {
    const previousRecords = this.records;

    return previousRecords;
  };

  redo = (): Record[] => {
    return this.doAction();
  };
}
