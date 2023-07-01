import { Request, Response } from 'express'

export interface Controller {
  createRecord: (req: Request, res: Response) => Promise<void>
}
