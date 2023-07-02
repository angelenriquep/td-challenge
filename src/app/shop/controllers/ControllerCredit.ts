import { Request, Response } from 'express'

export interface ControllerCredit {
  addCredit: (req: Request, res: Response) => Promise<void>
}
