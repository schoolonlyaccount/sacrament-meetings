import { getMeetingById } from '@/lib/meetings-db';

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
    const { id } = await params;
    const numericId = Number(id);

    if (!Number.isInteger(numericId)) {
        return Response.json(
            { error: 'Invalid meeting ID' },
            { status: 400 }
        );
    }

    const meeting = await getMeetingById(numericId);

    if (!meeting) {
        return Response.json(
            { error: 'Meeting not found' },
            { status: 404 }
        );
    }

    return Response.json(meeting);
}