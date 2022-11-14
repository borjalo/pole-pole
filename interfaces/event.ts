export interface IEvent {
  project: string;
  channel: string;
  title: string;
  message: string;
  icon: string;
  notify: boolean;
  tags?: { [key: string]: any };
}
