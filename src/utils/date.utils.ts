export class DateFormat {
  constructor(
    private date: string,
    private startDate?: string,
    private endDate?: string,
    private isFullDate?: boolean
  ) {}

  toFullYear = () => {
    return new Date(this.date).getFullYear();
  };

  toMonth = () => {
    return new Date(this.date).toLocaleDateString("fr-FR", { month: "long" });
  };

  toSimpleDate = (date?: string) => {
    const month = new Date(date ? date : this.date).toLocaleDateString(
      "fr-FR",
      {
        month: "long",
      }
    );
    const fullyear = new Date(date ? date : this.date).getFullYear();
    return `${month} ${fullyear}`;
  };

  private toSimpleDateString = (date: string) => {
    const month = new Date(date).toLocaleDateString("fr-FR", { month: "long" });
    const fullyear = new Date(date).getFullYear();
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    return `${capitalizedMonth} ${fullyear}`;
  };

  toTimelineDate = () => {
    const startDate = this.toSimpleDateString(this.startDate as string);
    const endDate = this.toSimpleDateString(this.endDate as string);
    return `${startDate} - ${endDate}`;
  };

  toTimeLineDatepresent = () => {
    const startDate = this.toSimpleDateString(this.date);
    return `${startDate} - Présent`;
  };
}
