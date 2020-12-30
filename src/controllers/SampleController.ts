import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { ApiResponse } from '../types'

type SampleRecordType = {
  id: string
  name: string
}

export const SampleController = {
  index: async (
    req: Request,
    res: Response<ApiResponse<SampleRecordType[]>>
  ): Promise<void> => {
    res.json({
      success: true,
      data: [
        {
          id: '1',
          name: 'sample name',
        },
      ],
      messages: ['データの取得に成功しました。'],
    })
  },
  store: async (
    req: Request<{}, any, SampleRecordType>,
    res: Response<ApiResponse<SampleRecordType>>
  ): Promise<void> => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
      res.status(422).json({
        success: false,
        messages: errors.array().map((err) => err.msg),
      })
      return
    }
    const { body } = req
    //保存処理を書く
    res.json({
      success: true,
      data: {
        id: body.id,
        name: body.name,
      },
      messages: ['データの保存に成功しました。'],
    })
  },
}
