import { Test, TestingModule } from '@nestjs/testing';
import { TriggerMessController } from './trigger-mess.controller';

describe('TriggerMessController', () => {
  let controller: TriggerMessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TriggerMessController],
    }).compile();

    controller = module.get<TriggerMessController>(TriggerMessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
