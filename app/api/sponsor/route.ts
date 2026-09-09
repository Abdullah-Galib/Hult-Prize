import { handleFormPost } from '@/lib/forms';

export async function POST(req: Request) {
  return handleFormPost(req, ['name', 'email', 'organization', 'partnershipType', 'message'], 'sponsor');
}
