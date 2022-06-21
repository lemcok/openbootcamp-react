export interface Task {
   id: string
   name: string
   desc: string
   completed: boolean
   level: 'normal' | 'urgent' | 'blocking'
}