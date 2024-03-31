import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { Board } from './board.entity';

import { InjectRepository } from '@nestjs/typeorm';
// import { BoardRepository } from './board.repository';
import { BoardRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-board-dto';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  createBoard(createBoardDto: CreateBoardDto) {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Cant find Board id');
    }
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException('cant not found');
    }
    return found;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  async getAllBoards() {
    return this.boardRepository.find();
  }
}
