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
      access_event: {
        Row: {
          access_event_id: number
          at: string
          access: string
          code: string
          access_user_id: number | null
          access_point_id: number
        }
        Insert: {
          access_event_id?: number
          at: string
          access: string
          code: string
          access_user_id?: number | null
          access_point_id: number
        }
        Update: {
          access_event_id?: number
          at?: string
          access?: string
          code?: string
          access_user_id?: number | null
          access_point_id?: number
        }
      }
      access_hub: {
        Row: {
          access_hub_id: number
          name: string
          description: string
          heartbeat_at: string | null
          api_token: string
          customer_id: string
        }
        Insert: {
          access_hub_id?: number
          name?: string
          description?: string
          heartbeat_at?: string | null
          api_token?: string
          customer_id: string
        }
        Update: {
          access_hub_id?: number
          name?: string
          description?: string
          heartbeat_at?: string | null
          api_token?: string
          customer_id?: string
        }
      }
      access_point: {
        Row: {
          access_point_id: number
          name: string
          description: string
          position: number
          access_hub_id: number
        }
        Insert: {
          access_point_id?: number
          name: string
          description?: string
          position: number
          access_hub_id: number
        }
        Update: {
          access_point_id?: number
          name?: string
          description?: string
          position?: number
          access_hub_id?: number
        }
      }
      access_point_to_access_user: {
        Row: {
          access_point_id: number
          access_user_id: number
        }
        Insert: {
          access_point_id: number
          access_user_id: number
        }
        Update: {
          access_point_id?: number
          access_user_id?: number
        }
      }
      access_user: {
        Row: {
          access_user_id: number
          name: string
          description: string
          code: string
          activate_code_at: string | null
          expire_code_at: string | null
          customer_id: string
          deleted_at: string | null
        }
        Insert: {
          access_user_id?: number
          name: string
          description?: string
          code: string
          activate_code_at?: string | null
          expire_code_at?: string | null
          customer_id: string
          deleted_at?: string | null
        }
        Update: {
          access_user_id?: number
          name?: string
          description?: string
          code?: string
          activate_code_at?: string | null
          expire_code_at?: string | null
          customer_id?: string
          deleted_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_access_hub: {
        Args: { access_hub_id: number; customer_id: string }
        Returns: unknown
      }
      get_access_hubs: {
        Args: { customer_id: string }
        Returns: unknown
      }
      get_grant_deny_stats: {
        Args: { customer_id: string }
        Returns: {
          access_hub_id: number
          name: string
          heartbeat_at: string
          access_point_id: number
          access_point_name: string
          access_point_position: number
          grant: number
          deny: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

