export class Measure {
  constructor(
    public uuid: number,
    public datetime: Date,
    public type: string,
    public has_confirmed: boolean,
    public image_url: string
  ) {}
}
