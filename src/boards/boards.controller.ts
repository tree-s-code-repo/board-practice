import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board.status-enum';
import { createBoardDto } from './dto/create-board-dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation-pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // @Get('/')
  // getAllBoard() {
  //   return this.boardService.getAllBoards();
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: createBoardDto): Board {
  //   const { title, description } = createBoardDto;
  //   return this.boardService.createBoard(createBoardDto);
  // }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
