import InputController from './InputController.js';
import OutputView from '../views/OutputView.js';
import LottoManager from '../models/LottoManager.js';

class MainController {
  async start() {
    const purchaseAmount = await InputController.getValidPurchaseAmount();

    const lottoManager = new LottoManager(purchaseAmount);

    OutputView.printPurchaseNumber(lottoManager.purchaseNumber);
    OutputView.printLineBreak();

    OutputView.printLottoList(lottoManager.lottoList);

    const winningNumbers = await InputController.getValidWinningNumbers();
    OutputView.printLineBreak();

    const bonusNumber =
      await InputController.getValidBonusNumber(winningNumbers);

    lottoManager.setWinningNumbers(winningNumbers, bonusNumber);

    const winningLottoCounts = lottoManager.getWinningLottoCounts();
    OutputView.printWinningStatistics(winningLottoCounts);

    const rateOfReturn = lottoManager.calculateRateOfReturn();
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default MainController;
