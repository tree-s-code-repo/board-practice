import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { createBoardDto } from './dto/create-board-dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get('/')
  getAllBoard() {
    return this.boardService.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: createBoardDto): Board {
    const { title, description } = createBoardDto;
    return this.boardService.createBoard(createBoardDto);
  }
}
