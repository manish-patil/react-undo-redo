import { ICommand, IWithID } from '../types';

export default class AddRecordCommand<Record extends IWithID>
  implements ICommand<Record>
{
  constructor(private list: Record[], private newNote: Partial<Record>) {}

  private doAction = () => {
    return [
      ...this.list,
      {
        id: this.list.length + 1,
        ...this.newNote,
      } as Record,
    ];
  };

  execute = (): Record[] => {
    return this.doAction();
  };

  undo = (): Record[] => {
    const previousNotes = this.list;

    return previousNotes;
  };

  redo = () => {
    return this.doAction();
  };
}
