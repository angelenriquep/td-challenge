import { Request, Response } from 'express'

export interface Controller {
  createRecord: (req: Request, res: Response) => Promise<void>
  getRecordByCriteria: (req: Request, res: Response) => Promise<void>
  removeRecord : (req: Request, res: Response) => Promise<void>
  updateRecord : (req: Request, res: Response) => Promise<void>
}