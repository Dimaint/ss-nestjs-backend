import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmployeeModule } from './employee/employee.module';
import { ClientsModule } from './clients/clients.module';
import { GroupsModule } from './groups/groups.module';
import { SchedulesModule } from './schedules/schedules.module';
import { VisitLogModule } from './visit-log/visit-log.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, EmployeeModule, ClientsModule, GroupsModule, SchedulesModule, VisitLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
