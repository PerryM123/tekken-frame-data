// TODO: 単体テストを追加
export default function getHostName(): string {
  const GITPAGES_URL: string = process.env.GITPAGES_URL || '';
  const LOCAL_URL: string = process.env.LOCAL_URL || '';
  return process.env.NODE_ENV === 'production' ? GITPAGES_URL : LOCAL_URL;
}
