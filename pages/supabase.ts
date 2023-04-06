export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      guests: {
        Row: {
          cheese: boolean | null
          created_at: string | null
          id: number
          name: string | null
          wine: boolean | null
        }
        Insert: {
          cheese?: boolean | null
          created_at?: string | null
          id?: number
          name?: string | null
          wine?: boolean | null
        }
        Update: {
          cheese?: boolean | null
          created_at?: string | null
          id?: number
          name?: string | null
          wine?: boolean | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
