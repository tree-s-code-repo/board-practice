import { Body, Param, Controller, Get, Post, Delete } from '@nestjs/common';
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

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardService.deleteBoard(id);
  }
}
