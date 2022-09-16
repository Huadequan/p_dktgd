export interface RankPlayerData {
    auth_code: string;
    /**头像 */
    avatarUrl: string;
    count: number;
    /**名次 */
    index: number;
    /**昵称 */
    nickName: string;
    open_id: string;
    state: string;
    /**排行榜分类标识 */
    type: string;
    /**分数 */
    val: string;
}
export class RankData {
    code: number;
    /**排行列表 */
    data: RankPlayerData[];
    /**自己 第一次可能查不到 */
    self: RankPlayerData;
    /**查询结果 */
    msg: string;
    constructor() { }
}