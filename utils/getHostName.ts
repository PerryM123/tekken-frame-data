// TODO: 単体テストを追加
export default function getHostName(): string {
  const GITHUB_PAGES_URL: string = process.env.GITHUB_PAGES_URL || '';
  const LOCAL_URL: string = process.env.LOCAL_URL || '';
  return process.env.NODE_ENV === 'production' ? GITHUB_PAGES_URL : LOCAL_URL;
}
