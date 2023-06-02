export interface IData {
  title: string
  content: IContent[]
}

export interface IContent {
  date: string
  'cipher-tasks': string
  'cipher-project': string
  task: string
  status: string
  responsible: string
  reassign: string
  priority: string
  comment: string
  'plan-time': string
  'fact-time': string
  start: string
  finish: string
}
