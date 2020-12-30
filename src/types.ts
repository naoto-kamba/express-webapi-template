export type ApiResponse<T> = {
  success: boolean
  data?: T
  messages: string[]
}
